#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;
  vector<pair<int, int>> wires(N);

  for (int i = 0; i < N; ++i) {
    cin >> wires[i].first >> wires[i].second;
  }

  // A 기준 정렬
  sort(wires.begin(), wires.end());

  vector<int> B;
  for (auto &w : wires) {
    B.push_back(w.second);
  }

  // LIS
  vector<int> dp(N, 1);
  int len = 1;
  for (int i = 0; i < N; ++i) {
    for (int j = 0; j <  i; ++j) {
      if (B[j] < B[i]) {
        dp[i] = max(dp[i], dp[j] + 1);
      }
    }
    len = max(len, dp[i]);
  }

  cout << N - len << '\n';
}
#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, K;
  cin >> N >> K;

  vector<int> temp(N);
  for (int i = 0; i < N; ++i) {
    cin >> temp[i];
  }

  int sum = 0;
  int max_sum = 0;

  for(int i = 0; i < K; ++i) {
    sum += temp[i];
  }
  max_sum = sum;

  for(int i = K; i < N; ++i) {
    sum = sum - temp[i - K] + temp[i];
    max_sum = max(max_sum, sum);
  }

  cout << max_sum << '\n';
  return 0;
}
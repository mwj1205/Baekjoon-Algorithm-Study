#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  vector<int> dp(N + 1); // dp[i] = i를 1로 만드는 최소 연산 횟수
  dp[1] = 0;

  // 1부터 N까지 역추적
  for (int i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1; // -1 연산
    if (i % 2 == 0) dp[i] = min(dp[i], dp[i / 2] + 1);
    if (i % 3 == 0) dp[i] = min(dp[i], dp[i / 3] + 1);
  }

  cout << dp[N] << '\n';
  return 0;
}

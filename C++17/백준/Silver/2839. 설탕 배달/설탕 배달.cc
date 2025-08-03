#include <iostream>
#include <algorithm>
using namespace std;

const int INF = 5001; // N은 최대 5000

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);
  
  int N;
  cin >> N;

  int dp[INF]; // dp[i] == ikg을 만들기 위한 최소 수
  for (int i = 0; i <= N; i++)
    dp[i] = INF;

  dp[0] = 0;

  for (int i = 3; i <= N; i++) {
    if (i >= 3)
      dp[i] = min(dp[i], dp[i - 3] + 1);
    if (i >= 5)
      dp[i] = min(dp[i], dp[i - 5] + 1);
  }

  if (dp[N] == INF)
    cout << -1 << '\n';
  else
    cout << dp[N] << '\n';

  return 0;
}

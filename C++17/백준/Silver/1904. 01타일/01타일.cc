#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  const int MOD = 15746;
  vector<int> dp(N + 1);

  dp[0] = 1;
  dp[1] = 1;
  for (int i = 2; i <= N; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  cout << dp[N] << '\n';
  return 0;
}

#include <iostream>
using namespace std;

long long dp[101];

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int T;
  cin >> T;

  // 초기값 
  dp[1] = dp[2] = dp[3] = 1;

  // DP 테이블 채우기
  for (int i = 4; i <= 100; ++i) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  while (T--) {
    int N;
    cin >> N;
    cout << dp[N] << '\n';
  }

  return 0;
}

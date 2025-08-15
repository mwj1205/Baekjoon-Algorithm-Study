#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int dp[1001][1001]; // dp[i][j] : A[0..i-1], B[0..j-1]의 LCS 길이

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  string A, B;
  cin >> A >> B;

  int n = A.size();
  int m = B.size();

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (A[i - 1] == B[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  cout << dp[n][m] << '\n';
  return 0;
}

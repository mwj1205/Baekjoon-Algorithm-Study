#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int T;
  cin >> T;
  while (T--) {
    int K;
    cin >> K;
    vector<int> files(K + 1);
    vector<int> sum(K + 1, 0);

    for (int i = 1; i <= K; i++) {
      cin >> files[i];
      sum[i] = sum[i - 1] + files[i];
    }

    vector<vector<int>> dp(K + 1, vector<int>(K + 1, 0)); // dp[i][j] = i번째 장부터 j번째 장까지 합칠 때 드는 최소 비용

    // 길이 2 이상 구간부터 처리
    for (int len = 2; len <= K; len++) {
      for (int i = 1; i + len - 1 <= K; i++) {
        int j = i + len - 1;
        dp[i][j] = 1e9;
        for (int k = i; k < j; k++) {
          dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + sum[j] - sum[i - 1]);
        }
      }
    }

    cout << dp[1][K] << '\n';
  }

  return 0;
}

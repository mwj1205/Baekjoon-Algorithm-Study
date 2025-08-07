#include <iostream>
#include <algorithm>
using namespace std;

int wine[10001];
int dp[10001]; // dp[i] = i번째 포도주 까지 마실 수 있는 최대 양

int main() {
  int n;
  cin >> n;

  for (int i = 1; i <= n; i++) {
    cin >> wine[i];
  }

  dp[1] = wine[1];
  if (n >= 2) {
    dp[2] = wine[1] + wine[2];
  }

  for (int i = 3; i <= n; i++) {
    dp[i] = max({
      dp[i - 1],                          // i번째 포도주를 마시지 않는 경우
      dp[i - 2] + wine[i],                // i번째 포도주를 마시고, i-1번째는 마시지 않는 경우
      dp[i - 3] + wine[i - 1] + wine[i]   // i번째와 i-1번째 포도주를 마시고, i-2번째는 마시지 않는 경우
    });
  }

  cout << dp[n] << '\n';
  return 0;
}

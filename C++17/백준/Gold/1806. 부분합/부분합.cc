#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  int N, S;
  cin >> N  >> S;

  vector<int> arr(N);
  for (int i = 0; i < N; ++i) {
    cin >> arr[i];
  }

  int start = 0, end = 0, sum = 0;
  int minLen = N + 1;

  while (true) {
    if (sum >= S) {
      minLen = min(minLen, end - start);
      sum -= arr[start++];
    } else if (end == N) {
      break;
    } else {
      sum += arr[end++];
    }
  }

  if (minLen == N + 1) {
    cout << 0 << '\n';
  } else {
    cout << minLen << '\n';
  }

  return 0;
}
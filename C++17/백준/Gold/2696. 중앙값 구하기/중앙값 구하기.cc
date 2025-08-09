#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int T;
  cin >> T;

  
  while (T--) {
    int M;
    cin >> M;

    priority_queue<int> left; // 최대 힙
    priority_queue<int, vector<int>, greater<int>> right; // 최소 힙
    vector<int> medians;
    
    for (int i = 1; i <= M; i++) {
      int x;
      cin >> x;

      // 작은 값은 left로, 큰 값은 right로
      if (left.empty() || x <= left.top()) left.push(x);
      else right.push(x);

      // 사이즈 맞추기
      if (left.size() > right.size() + 1) {
        right.push(left.top());
        left.pop();
      }
      else if (left.size() < right.size()) {
        left.push(right.top());
        right.pop();
      }

      // 중앙값 저장
      if (i % 2 == 1) {
        medians.push_back(left.top());
      }
    }

    // 출력
    cout << medians.size() << '\n';
    for (int i = 0; i < (int)medians.size(); ++i) {
      cout << medians[i] << ' ';
      // 10개마다 줄바꿈
      if ((i + 1) % 10 == 0) cout << '\n';
    }
    cout << '\n';
  }

  return 0;
}
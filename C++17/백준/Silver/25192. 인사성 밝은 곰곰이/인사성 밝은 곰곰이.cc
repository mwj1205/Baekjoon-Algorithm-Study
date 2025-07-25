#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);


  int N;
  cin >> N;

  unordered_set<string> users;
  int count = 0;

  for (int i = 0; i < N; ++i) {
    string chat;
    cin >> chat;

    if (chat == "ENTER") {
      count += users.size(); // 이전 세션에서 곰곰티콘 사용한 사람 수
      users.clear();         // 새로운 세션 시작
    } else {
      users.insert(chat);    // 같은 사람은 한 번만 계산됨
    }
  }

  // 마지막 세션 처리
  count += users.size();

  cout << count << '\n';
  return 0;
}

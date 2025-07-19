#include <iostream>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  int count = 0;
  int num = 666;

  // 브루트포스, 666부터 모든 숫자를 확인해서 "666"이 포함되어 있는지 확인
  while (count != N) {
    if (to_string(num).find("666") != string::npos) {
      count++;
      if (count == N) {
        break;
      }
    }
    num++;
  }

  cout << num << '\n';
  return 0;
}
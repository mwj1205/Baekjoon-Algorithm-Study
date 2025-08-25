#include <iostream>
#include <set>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int n;
  cin >> n;

  set<string, greater<string>> inside; // 자동 정렬

  for (int i = 0; i < n; i++) {
    string name, action;
    cin >> name >> action;
    if (action == "enter") {
      inside.insert(name);
    } else {
      inside.erase(name);
    }
  }

  for (auto &name : inside) {
    cout << name << "\n";
  }

  return 0;
}

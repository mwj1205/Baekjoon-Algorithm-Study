#include <iostream>
#include <set>
#include <string>
using namespace std;

int main() {
  int N;
  cin >> N;

  set<string> dancing;
  dancing.insert("ChongChong");

  for (int i = 0; i < N; ++i) {
    string a, b;
    cin >> a >> b;

    if (dancing.count(a) || dancing.count(b)) {
      dancing.insert(a);
      dancing.insert(b);
    }
  }

  cout << dancing.size() << '\n';
  return 0;
}
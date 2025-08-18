#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int n, m;
  cin >> n >> m;

  unordered_set<int> A, B;
  int x;

  for (int i = 0; i < n; i++) {
    cin >> x;
    A.insert(x);
  }

  for (int i = 0; i < m; i++) {
    cin >> x;
    B.insert(x);
  }

  int common = 0;
  for (int a : A) {
    if (B.find(a) != B.end())
      common++;
  }

  cout << (n + m - 2 * common) << '\n';
  return 0;
}

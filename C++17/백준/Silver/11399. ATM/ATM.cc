#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  int n;
  cin >> n;

  vector<int> p(n);
  for (int i = 0; i < n; i++) {
    cin >> p[i];
  }

  // 시간 짧은 사람부터 정렬
  sort(p.begin(), p.end());

  int total = 0;
  int sum = 0;
  for (int i = 0; i < n; i++) {
    sum += p[i];
    total += sum;
  }

  cout << total << '\n';
  return 0;
}

#include <iostream>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  string ans;
  ans = string(N, 'a');

  cout << ans << "\n";
  return 0;
}

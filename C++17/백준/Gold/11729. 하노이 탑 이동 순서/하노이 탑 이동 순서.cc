#include <iostream>
#include <math.h>
using namespace std;

// hanoi (원판 개수, 출발지, 목적지, 경유지)
void hanoi(int n, int from, int to, int sub) {
  if (n == 1) {
    cout << from << " " << to << '\n';
    return;
  }
  hanoi(n - 1, from, sub, to);    // n-1개를 보조 장대로
  cout << from << " " << to << '\n'; // 가장 큰 원판 이동
  hanoi(n - 1, sub, to, from);    // 나머지를 목적지로
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int n;
  cin >> n;
  int k = pow(2, n) - 1; // 최소 이동 횟수: 2^n - 1
  cout << k << '\n';
  hanoi(n, 1, 3, 2);
  return 0;
}
#include <iostream>
using namespace std;

using ll = long long;

// 참고: 빠른 모듈러 거듭제곱
// https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/fast-modular-exponentiation

ll modPow(ll a, ll b, ll c) {
  ll result = 1;
  ll base = a % c;

  while (b > 0) {
    if (b & 1) {
      result = (result * base) % c;
    }

    base = (base * base) % c;

    // 오른쪽으로 한 비트 이동 (b = b / 2)
    b >>= 1;
  }

  return result;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  ll A, B, C;
  cin >> A >> B >> C;

  cout << modPow(A, B, C) << '\n';
  return 0;
}
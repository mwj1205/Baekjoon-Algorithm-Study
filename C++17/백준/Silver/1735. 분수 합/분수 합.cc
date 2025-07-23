#include <iostream>
using namespace std;

// 유클리드 호제법
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int main() {
    int a, b, c, d;
    cin >> a >> b;
    cin >> c >> d;

    int numerator = a * d + b * c;
    int denominator = b * d;

    int g = gcd(numerator, denominator); // 최대공약수

    cout << numerator / g << " " << denominator / g << endl;
    return 0;
}

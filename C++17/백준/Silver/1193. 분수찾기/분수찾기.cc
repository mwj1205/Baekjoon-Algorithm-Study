#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int X;
  cin >> X;

  int line = 1;  // 대각선 번호
  int sum = 0;

  // X가 속한 대각선 번호 찾기
  while (sum + line < X) {
    sum += line;
    line++;
  }

  int pos = X - sum;

  int num, den;
  if (line % 2 == 0) { 
    // 짝수 대각선: 분자 증가, 분모 감소
    num = pos;
    den = line - pos + 1;
  } else { 
    // 홀수 대각선: 분자 감소, 분모 증가
    num = line - pos + 1;
    den = pos;
  }

  cout << num << "/" << den << "\n";
}

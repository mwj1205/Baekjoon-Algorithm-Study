#include <iostream>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  string s;
  cin >> s;

  int count = 0;
  for (int i = 0; i < (int)s.size(); i++) {
    if (i + 2 < (int)s.size() && s.substr(i, 3) == "dz=") {
      count++;
      i += 2;
    }
    else if (i + 1 < (int)s.size()) {
      string two = s.substr(i, 2);
      if (two == "c=" || two == "c-" || two == "d-" ||
          two == "lj" || two == "nj" || two == "s=" || two == "z=") {
        count++;
        i++;
        continue;
      }
      count++;
    }
    else {
      count++;
    }
  }

  cout << count << "\n";
  return 0;
}

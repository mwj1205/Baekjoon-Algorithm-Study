#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

typedef long long ll;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int K, N;
    cin >> K >> N;

    vector<int> cables(K);
    ll maxLen = 0;

    for (int i = 0; i < K; i++) {
        cin >> cables[i];
        if (cables[i] > maxLen) {
            maxLen = cables[i];
        }
    }

    ll left = 1;
    ll right = maxLen;
    ll result = 0;

    while (left <= right) {
        ll mid = (left + right) / 2; // 자를 길이
        ll count = 0;

        for (int i = 0; i < K; i++) {
            count += cables[i] / mid;
        }

        if (count >= N) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1; // 너무 길어서 개수가 부족
        }
    }

    cout << result << '\n';
    return 0;
}

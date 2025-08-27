#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int N; 
    cin >> N;
    unordered_set<int> cards;

    for (int i = 0; i < N; i++) {
        int x; 
        cin >> x;
        cards.insert(x);
    }

    int M; 
    cin >> M;

    while (M--) {
        int x; 
        cin >> x;
        cout << (cards.count(x) ? '1' : '0') << ' ';
    }
}

#include<bits/stdc++.h>
using namespace std ;

class first{
    long long value ;
    string name ;
    first(long long value , string name){
        this->value = value ;
        this.n = name ;
    }
}

class second : private first {
    long long value1 ;
    second(long long value , string name , long long value1){
        isupper(value , name);
        this->value1 = value1 ;
    }
}
int main(){
    return 0 ;
}
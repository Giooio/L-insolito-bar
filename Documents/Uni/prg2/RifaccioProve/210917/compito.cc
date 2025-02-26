#include <iostream>
#include <fstream>
#include <cstring>

using namespace std;

#include "liste.h"

const char NOMEFILE[]= "agenda.txt";

const void leggi_riga(istream &is, char* riga){
    if(is.peek() == '\0')
        is.get();
    is.get(riga, 51);
}

/**
 * @brief Aggiungo a ad agenda solo se è un nuovo appuntamento
 * 
 * @param agenda 
 * @param a 
 */
void agenda(lista& agenda, tipo_inf a){
    elem* nuovo = new_elem(a);
    elem* s = search(agenda, a);
    if(s==NULL){
        insert_elem(agenda, nuovo);
        cout<<nuovo->inf.data;
    }else{
        cout<<"Errore di inserimento"<<endl;
        print(a);
    }
}

/**
 * @brief Stampa l'agenda
 * 
 * @param agenda 
 */
void stampa(lista agenda){
    while(agenda != NULL){
        print(head(agenda));
        agenda = tail(agenda);
    }
}

int main(){
    tipo_inf temp;
    lista l = NULL; 
    ifstream in(NOMEFILE, ios::in);
    
    if(!in){
        cout<<"errore apertura file"<<endl;
    }

    cout<<"Carico il contenuto..."<<endl;
    while(in>>temp.data>>temp.ora_i>>temp.ora_f){
        leggi_riga(in, temp.descr);
        agenda(l, temp);
        cout<<"ho inserito "<<endl;
    }

    in.close();
    cout<<"Contenuto caricato, adesso stampo"<<endl;
    stampa(l);
    



}
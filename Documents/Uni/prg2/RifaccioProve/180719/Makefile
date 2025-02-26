OBJ = compito.o coda.o grafi.o
CXXFLAGS = -g 

Nod-list: $(OBJ)
	g++ -o Nod-list $(OBJ)

-include dependencies

.PHONY: clean cleanall
depend:
	g++ -MM *.cc > dependencies
clean:
	rm -rf *.o
cleanall:
	rm -rf Nod-list *.o
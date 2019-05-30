import re

def F2(line):
	line = line.lower()
	line = line[14:len(line)-16]
	line = line.split("</title><text>")
	title = line[0]
	words = set(re.sub('[^0-9a-z+#\-]+', ' ', line[1]).split())
	words = list(filter(lambda x: x in languages, words))
	arr = list([(w, title) for w in words])
	return arr

languages = ['javascript', 'java', 'php', 'python', 'c#', 'c++', 'ruby', 'css', 'objective-c', 'perl', 'scala', 'haskell', 'matlab', 'clojure', 'groovy']

rdd = sc.textFile("/home/bob/Desktop/lab8/wikipedia.dat")
rdd.cache()
rdd4 = rdd.flatMap(F2).groupByKey()
rdd5 = rdd4.map(lambda x: (x[0], len(x[1])))
rdd5.collect()

#---------------------------------------------------
rdd6 = rdd4.map(lambda x: (x[0], list(x[1])))
rdd5.sortBy(lambda x: x[1], ascending = False).take(15)
filter(lambda x: x[0] == 'c++', rdd6.take(15))
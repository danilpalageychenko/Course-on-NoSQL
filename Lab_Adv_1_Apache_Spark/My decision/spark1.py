import re

def Func(lines):
	lines = lines.lower()
	lines = re.sub('[^0-9a-z+#\-]+', ' ', lines)
	lines = lines.split()
	return lines

languages = ['javascript', 'java', 'php', 'python', 'c#', 'c++', 'ruby', 'css', 'objective-c', 'perl', 'scala', 'haskell', 'matlab', 'clojure', 'groovy']


rdd = sc.textFile("/home/bob/Desktop/lab8/wikipedia.dat")
rdd.cache()
rdd1 = rdd.flatMap(Func)
rdd2 = rdd1.filter(lambda x: x in languages)
rdd2_mapped = rdd2.map(lambda x: (x,1))
rdd3 = rdd2_mapped.reduceByKey(lambda x,y: x + y)
rdd3.take(len(languages))
#rdd3.take(rdd3.count())
#rdd3.collect()

#---------------------------------------------------
rdd3.sortBy(lambda x: x[1], ascending = False).take(15)
rdd3.map(lambda x: (x[1], x[0])).sortByKey(False).take(15)
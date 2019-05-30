pictures = [ '.tiff', '.jpeg', '.bmp', '.jpe', '.jpg', '.png', '.gif', '.psd']

def f1(line):
        req  =    line.split('"')
    req = req[1].split()
    if len(req) <= 1:
        return ("", 1)
    return (req[1].lower(), 1)

def f4(line):    
    client = line.split()[0]
    req = line.split('"')[1]
    return (client, req)
    
def f40(x):
    client = x[0]
    query = x[1].split()[1]
    query = query[20:].split('&')[0]
    return ((client, query), 1)


rdd = sc.textFile('hdfs:///user/lab/access_log')
rdd1 = rdd.map(f1)

rdd11 = rdd1.filter(lambda x:x[0] != "" and x[0] != '/' and not any(pic in x[0] for pic in pictures)).reduceByKey(lambda x, y: x + y)

rdd3 = rdd1.filter(lambda x: '/cgi-bin/' in x[0]).map(lambda x: ('/cgi-bin/', x[1])).reduceByKey(lambda x, y: x + y) 

rdd4 = rdd.map(f4).filter(lambda x: '/cgi-bin/cusi?query' in x[1]).map(f40).reduceByKey(lambda x, y: x + y).sortBy(lambda x: x[1], ascending = False)

---------------------------------------------------------------------------------------------------------------------------------------------------------

def f2(line):
    req = line.split()
        client = req[0]
    trafic = 0
    try:
            trafic = int(req[-1])
    except ValueError:
        trafic = -1
        return (client, trafic)

rdd = sc.textFile('hdfs:///user/lab/access_log')
rdd2 = rdd.map(f2).filter(lambda x: x[1] >= 0).reduceByKey(lambda x, y: x+y).sortBy(lambda x: x[1], ascending = False)
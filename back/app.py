import sqlite3
from flask import Flask
from flask import request

app = Flask(__name__)

conn = sqlite3.connect("sql.db")
conn.execute("DROP TABLE IF EXISTS PEOPLE")
conn.execute(
    """ CREATE TABLE PEOPLE
    (NAME   TEXT  PRIMARY KEY  NOT NULL,
    COLOR  TEXT  NOT NULL,
    NUMBER  TEXT  NOT NULL);
    """
)

conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Jevin','blue','9')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Ramesh','red','3')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Kevin','yellow','7')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Suresh','green','4')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Rajesh','black','6')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Deep','pink','8')")
conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Vinit','white','2')")

conn.commit()


@app.route("/", methods=["GET"])
def home():
    outpEdit = []
    conn = sqlite3.connect("sql.db")
    cursor = conn.cursor()
    query = "SELECT * FROM PEOPLE order by NAME ASC "
    cursor.execute(query)
    for i in cursor:
        outpEdit.append(i)
    # print(outpEdit)
    cursor.close()
    return outpEdit


@app.route("/api", methods=["GET", "POST"])
def api():
    outp = []
   
    print("METHOd", request.method)
    if request.method == "POST":
        inp = request.form.get("name")
        conn = sqlite3.connect("sql.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM PEOPLE where name = (?)",(inp,))
        for i in cursor:
            outp.append(i)
        cursor.close()
        if(len(outp)!=0): 
            return (outp)
        else:
            outp.append(["No Record Found", " ", " "])
            return (outp)


@app.route("/edit", methods=["GET", "POST"])
def edit():
    outp=[]
    if request.method == "POST":
        inpName = request.form.get("name")
        inpColor = request.form.get("color")
        inpNumber = request.form.get("number")
        conn = sqlite3.connect("sql.db")
        cursor = conn.cursor()
        cursor.execute("UPDATE PEOPLE SET COLOR=(?), NUMBER=(?) WHERE NAME=(?)",(inpColor,inpNumber,inpName))
        conn.commit()
        cursor.execute("SELECT * FROM PEOPLE where name = (?)",(inpName,))
        for i in cursor:
            outp.append(i)
        cursor.close()
        return (outp)
    # else:
    #     return outpEdit


@app.route("/add", methods=["POST"])
def add():
    outp=[]
    # if request.method == "POST":
    n1 = request.form.get("name")
    c1 = request.form.get("color")
    num1 = request.form.get("number")
    conn = sqlite3.connect("sql.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO PEOPLE (NAME, COLOR, NUMBER) VALUES (?,?,?)",(n1,c1,num1))
    conn.commit()
    cursor.execute("SELECT * FROM PEOPLE order by NAME ASC")
    for i in cursor:
        outp.append(i)
    cursor.close()
    return outp

#----------------------------------------------------------------------------------------------------------
connl = sqlite3.connect("login.db")
connl.execute("DROP TABLE IF EXISTS DETAILS")
connl.execute(
    """ CREATE TABLE DETAILS
    (USERNAME   TEXT  PRIMARY KEY  NOT NULL,
    PASS  TEXT  NOT NULL,
    RIGHTS  TEXT  NOT NULL
    );
    """
)

connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Jevin','blue','full')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Ramesh','red','semi')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Kevin','yellow','none')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Suresh','green','none')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Rajesh','black','semi')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Deep','pink','semi')")
connl.execute("INSERT INTO DETAILS (USERNAME, PASS, RIGHTS) VALUES ('Vinit','white','full')")

connl.commit()

@app.route("/login", methods=["POST"])
def login():
    outp=[]
    # if request.method == "POST":
    n1 = request.form.get("username")
    c1 = request.form.get("pass")
    print("n1",n1)
    print("c1",c1)
    connl = sqlite3.connect("login.db")
    cursor = connl.cursor()
    # cursor.execute("INSERT INTO PEOPLE (NAME, COLOR, NUMBER) VALUES (?,?,?)",(n1,c1))
    # connl.commit()
    cursor.execute("SELECT * FROM DETAILS WHERE USERNAME=(?) ",(n1,))
    for i in cursor:
        outp.append(i)    
    cursor.close()
    print("Outp",outp)
    if(len(outp)!=0 ):
        if(outp[0][1]==c1):
            if(outp[0][2]=="full"):
                return "Full"
            elif(outp[0][2]=="semi"):
                return "Semi"
            else:
                return "None"

        else:
            return "Failure"
    else:
        return "UNotExist"


@app.route("/signup", methods=["POST"])
def signup():
    outp=[]
    # if request.method == "POST":
    n1 = request.form.get("username")
    c1 = request.form.get("pass")
    print("n1",n1)
    print("c1",c1)
    connl = sqlite3.connect("login.db")
    cursor = connl.cursor()
    # cursor.execute("INSERT INTO PEOPLE (NAME, COLOR, NUMBER) VALUES (?,?,?)",(n1,c1))
    # connl.commit()
    cursor.execute("SELECT * FROM DETAILS WHERE USERNAME=(?) ",(n1,))
    for i in cursor:
        outp.append(i)    
    cursor.close()
    print("Outp",outp)
    if(len(outp)!=0 ):
        return "Failure"
    else:
        connl.execute("INSERT INTO DETAILS (USERNAME, PASS) VALUES (?,?)",(n1,c1))
        connl.commit()
        return "Success"
    
    
   

        
    
    #**************************************
        # for i in cursor:
        #     outp.append(i)
        # for i in range(len(outp)):
        #     if inp == outp[i][0]:
        #         ret.append(outp[i])

        #         return ret
        # ret.append(["No Record Found", " ", " "])
        # return ret
#*********************************************
# import sqlite3


# app = Flask(__name__)

# conn = sqlite3.connect("sql.db")
# conn.execute(
#     """ CREATE TABLE PEOPLE
#     (NAME   TEXT  PRIMARY KEY  NOT NULL,
#     COLOR  TEXT  NOT NULL,
#     NUMBER  TEXT  NOT NULL);
#     """
# )

# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Jevin','blue','9')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Ramesh','red','3')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Kevin','yellow','7')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Suresh','green','4')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Rajesh','black','6')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Deep','pink','8')")
# conn.execute("INSERT INTO PEOPLE (NAME,COLOR,NUMBER) VALUES ('Vinit','white','2')")

# conn.commit()
# inp="Jevin"
# outp=[]
# cursor= conn.cursor()
# cursor.execute("SELECT * FROM PEOPLE where name = (?)",(inp,))
# for i in cursor:
#     outp.append(i)
# print("#########", outp[0][1])


#************************************************************
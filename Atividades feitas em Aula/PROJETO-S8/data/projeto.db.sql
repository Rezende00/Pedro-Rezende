BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tbUser" (
	"userId"	INTEGER NOT NULL,
	"id"	integer(128) NOT NULL,
	"title"	char(128) NOT NULL,
	"completed"	integer(128) NOT NULL,
	PRIMARY KEY("userId")
);
CREATE TABLE IF NOT EXISTS "tbProject" (
	"idProject"	INTEGER NOT NULL,
	"name"	VARCHAR(255),
	"initialTime"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("idProject")
);
CREATE TABLE IF NOT EXISTS "pessoa" (
	"id"	INTEGER,
	"nome"	TEXT(50) UNIQUE,
	"email"	TEXT(50),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "votacao" (
	"id"	INTEGER,
	"cor"	TEXT,
	"votos"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "estudante" (
	"idEstudante"	INTEGER,
	"nomeCompleto"	TEXT,
	"mediaGeral"	INTEGER,
	"idEscola"	INTEGER,
	PRIMARY KEY("idEstudante" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "escola" (
	"idEscola"	INTEGER,
	"nomeEscola"	TEXT,
	"cnpj"	TEXT,
	PRIMARY KEY("idEscola" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "curriculo" (
	"idCurriculo"	INTEGER,
	"item"	TEXT,
	"descricao"	TEXT,
	"idCategoria"	INTEGER,
	PRIMARY KEY("idCurriculo" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "categoria" (
	"idCategoria"	INTEGER,
	"nomeCategoria"	TEXT,
	PRIMARY KEY("idCategoria" AUTOINCREMENT)
);
INSERT INTO "tbUser" VALUES (1,1,'Usuario de teste lido com sucesso',0);
INSERT INTO "tbUser" VALUES (2,2,'Faustão',1);
INSERT INTO "tbUser" VALUES (3,3,'Flavio',1);
INSERT INTO "tbUser" VALUES (4,4,'Flavinho GP',1);
INSERT INTO "tbUser" VALUES (5,5,'Sérgio Malandro',1);
INSERT INTO "pessoa" VALUES (4,'flavio m azevedo','fmazevedo@gmail.com');
INSERT INTO "pessoa" VALUES (7,'Teste','teste@email.com');
INSERT INTO "pessoa" VALUES (8,'rtetertert','rsdfsdf');
INSERT INTO "votacao" VALUES (1,'Azul',19);
INSERT INTO "votacao" VALUES (2,'Vermelho',12);
INSERT INTO "votacao" VALUES (3,'Amarelo',3);
INSERT INTO "votacao" VALUES (4,'Marrom',5);
INSERT INTO "votacao" VALUES (5,'Rosa',40);
INSERT INTO "estudante" VALUES (1,'Flavio Azevedo',8,1);
INSERT INTO "escola" VALUES (1,'Colégio Cardeal Motta','12312312333123');
COMMIT;

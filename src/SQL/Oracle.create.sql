



CREATE TABLE "Заявка"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЗаявки" NVARCHAR2(255) NULL,

	"КодСотрудника" NVARCHAR2(255) NULL,

	"КодЗаявки" NUMBER(10) NULL,

	"Важность" NVARCHAR2(255) NULL,

	"КодКонтрагента" NVARCHAR2(255) NULL,

	"Контрагент" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Запись"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ВремяНачала" NVARCHAR2(255) NULL,

	"ВремяОкончания" NVARCHAR2(255) NULL,

	"КодРегистра" NUMBER(10) NULL,

	"КодЗаявки" NUMBER(10) NULL,

	"КодЗаписи" NUMBER(10) NULL,

	"Заявка" RAW(16) NOT NULL,

	"Регистр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"КодДолжности" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагент"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКонтрагента" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Договор" NVARCHAR2(255) NULL,

	"Организация" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Регистр"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодРегистра" NUMBER(10) NULL,

	"Периодичность" NVARCHAR2(255) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"КодСотрудника" NUMBER(10) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"ТабНомер" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Заявка"
	ADD CONSTRAINT "Заявка_FКонтр_8307" FOREIGN KEY ("Контрагент") REFERENCES "Контрагент" ("primaryKey");

CREATE INDEX "Заявка_IКонтр_1537" on "Заявка" ("Контрагент");

ALTER TABLE "Заявка"
	ADD CONSTRAINT "Заявка_FСотру_1865" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Заявка_IСотру_4810" on "Заявка" ("Сотрудник");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FЗаявка_0" FOREIGN KEY ("Заявка") REFERENCES "Заявка" ("primaryKey");

CREATE INDEX "Запись_IЗаявка" on "Запись" ("Заявка");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FРегистр_0" FOREIGN KEY ("Регистр") REFERENCES "Регистр" ("primaryKey");

CREATE INDEX "Запись_IРегистр" on "Запись" ("Регистр");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_3036" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2503" on "Сотрудник" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");



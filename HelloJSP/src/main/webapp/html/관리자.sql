alter session set "_ORACLE_SCRIPT" = true;

create  user dev identified by dev;
grant connect, resource to dev;
alter user dev default tablespace users quota unlimited on users;
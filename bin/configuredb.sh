#!/bin/bash

export PGPASSWORD='password'

database = "ttgeneratordb"

echo "Configuring database ${database}"

dropdb -U bc_user ttgeneratordb

createdb -U bc_user ttgeneratordb

psql -U bc_user ttgeneratordb < bin/sql/staff.sql

echo "${database} configured."
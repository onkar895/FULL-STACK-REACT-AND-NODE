# MongoDB: The Complete Guide 📚

> A comprehensive guide to understanding, installing, and working with MongoDB - perfect for beginners and intermediate users.

## Table of Contents:

1. [Understanding Database Types: Relational vs NoSQL](#understanding-database-types-relational-vs-nosql)
   - [Introduction to Database Types](#introduction-to-database-types)
   - [Detailed Comparison](#detailed-comparison)
   - [When to Use Each Type](#when-to-use-each-type)

2. [NoSQL Cloud Database Services](#nosql-cloud-database-services)
   - [Types of NoSQL databases](#types-of-nosql-databases)
   - [Difference between NoSQL Databases and SQL Databases](#difference-between-nosql-databases-and-sql-databases)

3. [Understanding JSON and BSON:](#understanding-json-and-bson)
   - [What is JSON?](#what-is-json)
   - [What is BSON?](#what-is-bson)
   - [JSON vs BSON Comparison](#json-vs-bson-comparison)
   - [How MongoDB Uses JSON and BSON](#how-mongodb-uses-json-and-bson)

4. [Introduction to MongoDB](#introduction-to-mongodb)
   - [What is MongoDB](#what-is-mongodb)
   - [MongoDB vs Traditional Databases (RDBMS)](#mongodb-vs-traditional-databases-rdbms)
   - [When to Use MongoDB?](#when-to-use-mongodb)

5. [MongoDB: Getting Started Guide](#mongodb-getting-started-guide)
   - [Installation and Setup](#installation-and-setup)
   - [Starting MongoDB](#starting-mongodb)
   - [Creating and Importing Data](#creating-and-importing-data)
   - [Querying Data](#querying-data)

6. [MongoDB vs MySQL: A Comprehensive Comparison](#mongodb-vs-mysql-a-comprehensive-comparison)
   - [What are MongoDB and MySQL?](#what-are-mongodb-and-mysql)
   - [Key Features](#key-features)
   - [Terminology Differences](#terminology-differences)

7.   [MongoDB Installation Guide](#mongodb-installation-guide)
   - [Ubuntu Installation](#ubuntu-installation)
   - [Windows Installation](#windows-installation)
   - [Testing Installation](#testing-installation)
   - [Troubleshooting](#troubleshooting)


---

---

# Understanding Database Types: Relational vs NoSQL 🚀

## Introduction to Database Types:

### Relational Database (RDBMS)
A Relational Database Management System (RDBMS) is the most traditional and widely used type of database. Proposed by E.F. Codd, it has these key characteristics:
- Stores data in tables (rows and columns)
- Each row represents a record
- Data is structured and organized
- Uses SQL (Structured Query Language)
- Perfect for applications where data structure is consistent

### NoSQL Database
NoSQL (Non-SQL or Not Only SQL) databases are modern databases designed for specific data models. Key characteristics include:
- Doesn't use traditional table structure
- Flexible data organization
- Built for large-scale data handling
- Supports various data formats
- Ideal for rapidly changing data structures

## Detailed Comparison

### 📊 Data Handling
| Aspect | Relational Database | NoSQL Database |
|--------|-------------------|----------------|
| Data Velocity | Handles low-velocity data | Handles high-velocity data |
| Data Volume | Manages smaller data volumes | Handles large data volumes |
| Data Type | Only structured data | All types of data (structured, semi-structured, unstructured) |
| Data Sources | Data usually comes from one or few locations | Data comes from many locations |

### 🔧 Technical Characteristics
| Feature | Relational Database | NoSQL Database |
|---------|-------------------|----------------|
| Scalability | Read scalability only | Both read and write scalability |
| Transactions | Supports complex transactions | Supports simple transactions |
| Failure Points | Single point of failure | No single point of failure |
| Transaction Location | Transactions written in one location | Transactions written in many locations |
| ACID Compliance | Fully supports ACID properties | Generally doesn't support ACID properties |

### 📝 Schema and Structure
| Aspect | Relational Database | NoSQL Database |
|--------|-------------------|----------------|
| Schema | Mandatory schema | Schema not required |
| Changes | Difficult to modify once defined | Easy and frequent changes possible |
| Deployment | Vertical scaling (adding more power to existing hardware) | Horizontal scaling (adding more servers) |

## When to Use Each Type?

### Use Relational Database When:
- You need ACID compliance
- Your data structure is consistent
- Complex transactions are required
- Data relationships are important
- You're building traditional applications like:
  - Banking systems
  - School management systems
  - Employee databases

### Use NoSQL Database When:
- You're handling large volumes of data
- Your data structure changes frequently
- You need high scalability
- You're building applications like:
  - Social media platforms
  - Real-time analytics
  - Big data applications

## Key Terms Explained

### ACID Properties
- **A**tomicity: All operations in a transaction succeed or none do
- **C**onsistency: Database remains in a consistent state
- **I**solation: Transactions don't interfere with each other
- **D**urability: Completed transactions are permanent

### Scalability
- **Vertical Scaling**: Adding more power to existing machines
- **Horizontal Scaling**: Adding more machines to handle load

## Summary
- Relational databases are better for consistent, structured data with complex relationships
- NoSQL databases excel at handling large volumes of varied data types
- Choice depends on your specific needs:
  - Data structure
  - Scale requirements
  - Transaction complexity
  - Change frequency

Remember: There's no "better" option - each type has its ideal use cases!


---


# NoSQL Cloud Database Services 💻

#### NoSQL Cloud Database Services are cloud-based database services that provide scalable, high-performance, and cost-effective solutions for storing and retrieving data.

## Some popular NoSQL Cloud Database Services include:
- Amazon DynamoDB: A fully managed NoSQL database service offered by Amazon Web Services (AWS) that provides fast and predictable performance with seamless scalability.
- Google Cloud Datastore: A NoSQL document database service that is fully managed and offers automatic scaling, high availability, and low latency.
- Microsoft Azure Cosmos DB: A globally distributed, multi-model database service that provides high availability, low latency, and flexible data modeling.
- MongoDB Atlas: A fully managed global cloud database service for MongoDB that provides automated backups, advanced security, and easy scalability.

#### A NoSQL Cloud Database Services is a database that provides a means that helps to store and retrieve data is a NoSQL database. The term non-relational/non-SQL is initially referred to as NoSQL. Big data and web applications are some of its application that uses NoSQL databases in real-time and their utilization to boost with time. Sometimes, NoSQL databases are referred to as ‘Not only SQL’ because query languages related to SQL are also supported. Better command over accessibility, less difficult level scaling to bunches of devices, and design simplicity are included in a NoSQL database.

### Types of NoSQL databases:
- Column-based
- Key-value store
- Graph databases
- Document-Based

## Difference between NoSQL Databases and SQL Databases:
- NoSQL database schema is flexible while SQL database schema is rigid.
- In NoSQL databases, queries are more immediate than SQL databases.
- NoSQL databases are non-relational while SQL databases are relational.
- NoSQL Examples -HBase, Bigtable.
- SQL Examples- Sybase, Access, Oracle, and MySQL.


---


# Understanding JSON and BSON: ✅

**JSON is a widely used data interchange format popular across many applications and technology stacks. BSON, the binary representation of JSON, is primarily used internally by MongoDB for efficient storage and data traversal.**

## What is JSON?
JSON (JavaScript Object Notation) is a popular way to format data that's easy for both humans and computers to read. It's used everywhere in modern programming, from web APIs to configuration files.

### Key Features of JSON
- Uses human-readable text format
- Built on key-value pairs
- Easy to understand and work with
- Widely supported across programming languages

### Example of a JSON Object
```json
{
  "_id": 1,
  "name": {
    "first": "John",
    "last": "Backus"
  },
  "contribs": [
    "Fortran",
    "ALGOL",
    "Backus-Naur Form",
    "FP"
  ],
  "awards": [
    {
      "award": "W.W. McDowell Award",
      "year": 1967,
      "by": "IEEE Computer Society"
    },
    {
      "award": "Draper Prize",
      "year": 1993,
      "by": "National Academy of Engineering"
    }
  ]
}
```

### JSON Structure Basics
- Curly braces `{}` define objects
- Square brackets `[]` define arrays
- Data is written as `"key": value` pairs
- Pairs are separated by commas
- Values must be one of these types:
  - Strings (in double quotes)
  - Numbers
  - Objects
  - Arrays
  - Boolean (true/false)
  - null

### Common Uses for JSON
- APIs (Application Programming Interfaces)
- Configuration files
- Log messages
- Database storage

## What is BSON?
BSON (Binary JSON) is a special binary format that MongoDB uses to store data. Think of it as JSON's more efficient cousin, designed specifically for databases.

### Why MongoDB Uses BSON
MongoDB chose to use BSON because it needed something that was:
1. Fast to process
2. Easy to traverse (move through the data)
3. More feature-rich than JSON

### BSON Example
Here's how a simple JSON object looks in BSON format:

```
{"hello": "world"} →

\x16\x00\x00\x00           // total document size
\x02                       // 0x02 = type String
hello\x00                  // field name
\x06\x00\x00\x00world\x00  // field value
\x00                       // 0x00 = type EOO ('end of object')
```

## JSON vs BSON Comparison

| Feature | JSON | BSON |
|---------|------|------|
| Encoding | UTF-8 text strings | Binary format |
| Data Types | Limited to:<br>• Strings<br>• Numbers<br>• Booleans<br>• Arrays<br>• Objects<br>• null | More extensive, including:<br>• All JSON types<br>• Dates<br>• Binary data<br>• Different types of numbers (integer, float, long, decimal128) |
| Readability | Both human and machine readable | Machine readable only |                                                                                                   |

## How MongoDB Uses JSON and BSON

### The Process Flow
1. Your application sends data in JSON format
2. MongoDB driver converts JSON to BSON
3. Data is stored in BSON format
4. When you request data:
   - BSON is converted back to JSON
   - JSON is sent to your application

### Benefits of Using BSON in MongoDB
1. **More Data Types**: Supports dates, binary data, and more
2. **Faster Processing**: Binary format makes data retrieval quicker
3. **Better Metadata**: Includes information about data length and types
4. **Efficient Storage**: Binary format often takes less space

## Working with BSON

### Converting Between BSON and JSON
You have several options:
- Use online JSON tools
- Use MongoDB's `bsondump` tool
- Let MongoDB drivers handle the conversion automatically

### When to Care About BSON
- As a beginner, you usually don't need to work with BSON directly
- MongoDB handles the JSON-to-BSON conversion automatically
- Focus on working with JSON in your applications
- The BSON conversion happens behind the scenes

## Summary
- JSON is the format you'll work with in your code
- BSON is how MongoDB stores that data internally
- You write and receive JSON, MongoDB handles the BSON conversion
- BSON makes MongoDB faster and more powerful while keeping JSON's ease of use


---


# Introduction to MongoDB 🚀

## What is MongoDB?
MongoDB is the most popular NoSQL database that stores data in flexible, JSON-like documents. Unlike traditional databases, it doesn't require a fixed data structure, making it perfect for modern applications.

### Simple Document Example
```json
{
  "title": "Geeksforgeeks",
  "by": "Harshit",
  "url": "https://www.geeksforgeeks.org",
  "type": "NoSQL"
}
```

## MongoDB vs Traditional Databases (RDBMS) 

| Feature | Traditional Database (RDBMS) | MongoDB |
|---------|----------------------------|---------|
| Data Structure | Tables | Collections |
| Row/Record | Row | Document |
| Column | Column | Field |
| Primary Key | Manually set | Automatic `_id` field |
| Schema | Fixed structure | Flexible structure |
| Scaling | Vertical (limited) | Horizontal (unlimited) |
| Query Language | SQL | MongoDB Query Language |
| Join Operations | Complex joins supported | Limited join support |

## Key Terms Translation
- RDBMS Table ➡️ MongoDB Collection
- RDBMS Row ➡️ MongoDB Document
- RDBMS Column ➡️ MongoDB Field

## Core Features 🔑

### 1. Document-Oriented
- Stores related data together in a single document
- No need to split data across multiple tables
- Example: Computer details stored in one document instead of separate CPU, RAM tables

### 2. Powerful Indexing
- Makes searches fast and efficient
- Similar to book index - helps find information quickly
- Essential for handling large data volumes

### 3. Scalability
- Horizontal scaling through sharding
- Can add more servers as data grows
- Automatically balances data across servers

### 4. High Availability
- Keeps multiple copies of data (replication)
- If one server fails, others take over
- Ensures your data is always accessible

## When to Use MongoDB?

### Perfect for:
- Big Data applications
- Frequently changing data structures
- Distributed systems
- Real-time analytics
- Content management systems

### Not ideal for:
- Complex transactions needing multiple updates
- Systems requiring SQL joins
- Fixed-structure applications

## Getting Started 🚀

### Installation
1. Visit [MongoDB Downloads](http://www.mongodb.org/downloads)
2. Choose your operating system:
   - Windows (64-bit 2008 R2+)
   - Linux
   - Mac OS X
   - Solaris

### Language Support
MongoDB works with most popular programming languages:
- JavaScript (Node.js)
- Python
- Java
- C++
- Ruby
- PHP
- And many more!

## Real-World Usage 🌐
Major companies using MongoDB:
- eBay
- Adobe
- Cisco
- EA Games
- Foursquare
- Craigslist

## Key Benefits for Beginners 🎯
1. Easy to learn and use
2. Flexible data structure
3. Great for modern web applications
4. Excellent documentation
5. Large community support
6. Free to use (open-source)

## Summary
MongoDB is a powerful, flexible database that's perfect for:
- Growing applications
- Big data handling
- Modern web development
- Quick development cycles

Remember: MongoDB shines when you need flexibility and scalability, but traditional databases might be better for applications requiring complex transactions or fixed structures.


---


# MongoDB: Getting Started Guide 📚

## Basic Concepts 

### Key Terms
| MongoDB Term | Description | RDBMS Equivalent |
|-------------|-------------|------------------|
| Database | Container for collections | Database |
| Collection | Group of MongoDB documents | Table |
| Document | Set of field-value pairs | Row/Record |
| Field | A key-value pair in a document | Column |

## Installation and Setup 

### Important Executables
Located in `C:\Program Files\MongoDB\Server\[version]\bin`:

| Executable | Purpose |
|------------|---------|
| `mongo` | Command Line Interface (CLI) to interact with database |
| `mongod` | Database server |
| `mongodump` | Creates binary backup of database |
| `mongoexport` | Exports data to JSON/CSV |
| `mongoimport` | Imports data into database |
| `mongorestore` | Restores database backup |
| `mongostat` | Shows database statistics |

### Starting MongoDB

1. **Start the Server**:
```bash
# Create data directory first
mkdir C:\data\db

# Start MongoDB server
mongod
```
> 💡 Default port is 27017

2. **Start the Client**:
```bash
mongo
```

## Basic Commands 💻

### Database Commands
```javascript
// Show all databases
show dbs

// Switch to a database
use <database_name>

// Show collections in current database
show collections
```

### Creating and Importing Data

1. **Create Collection**:
```javascript
db.createCollection("collection_name", {
    size: value,
    capped: boolean,
    max: value
})
```

2. **Import Data**:
```bash
mongoimport --jsonArray --db test --collection employee_data < path/to/file.json
```

## Querying Data

### Basic Query Methods
```javascript
// Count documents
db.collection.count()

// Find all documents
db.collection.find()

// Find one document
db.collection.findOne()

// Find with index (get 7th document)
db.collection.find()[6]  // indexing starts at 0
```

### Query Examples

1. **Count by Condition**:
```javascript
// Count employees in specific company
db.employee_data.find({ company: "GEEKS FOR GEEKS" }).count()
```

2. **Find by Name**:
```javascript
// Find all employees named "Sandeep Jain"
db.employee_data.find({ name: "Sandeep Jain" })
```

3. **Projection** (Select Specific Fields):
```javascript
// Show specific fields (exclude _id)
db.employee_data.find(
    { name: "Harshit Gupta" },
    { _id: 0, age: 1, gender: 1, email: 1 }
)
```

4. **Query with Variables**:
```javascript
// Find all female employees
var femaleEmp = db.employee_data.find({ gender: "female" })
for (var i = 0; i < femaleEmp.count(); i++) {
    print(femaleEmp[i].name)
}

// Alternative using projection
db.employee_data.find(
    { gender: "female" },
    { _id: 0, name: 1 }
)
```

## Important Notes 📝

1. **The `_id` Field**:
   - Automatically added if not provided
   - 12-byte hexadecimal number
   - Ensures document uniqueness
   - Can be modified (not recommended)

2. **Projections**:
   - Use `1` to include a field
   - Use `0` to exclude a field
   - `_id` is included by default
   - Must explicitly set `_id: 0` to exclude it

## Tips for Beginners 💡

1. Always start `mongod` server before using `mongo` client
2. Use meaningful collection names
3. Practice with small datasets first
4. Remember that MongoDB is case-sensitive
5. Use the `help` command when stuck


---


# MongoDB vs MySQL: A Comprehensive Comparison 🚀

## What are MongoDB and MySQL?

| MongoDB | MySQL |
|---------|--------|
| An open-source NoSQL database developed by MongoDB, Inc. Stores data in JSON-like documents with flexible structure. | An open-source relational database management system (RDBMS) developed, distributed, and supported by Oracle Corporation. |

## Data Storage Comparison

| Aspect | MongoDB | MySQL |
|--------|---------|--------|
| Basic Unit | Records stored as 'documents' | Records stored as 'rows' in a table |
| Grouping | Documents stored in 'collections' (e.g., collection of users) | Rows stored in 'tables' |

## Database Type

| MongoDB | MySQL |
|---------|--------|
| NoSQL database with dynamic schema | Uses Structured Query Language (SQL) with fixed schema |
| Different documents in a collection can have different structures | Schema cannot be changed; all entries must follow predefined structure |

### Example of Schema Flexibility
- MySQL: If a table has columns for 'name' and 'address', adding a new 'age' field requires schema modification
- MongoDB: New fields can be added to individual documents without changing overall structure

## Key Features

| Feature | MongoDB | MySQL |
|---------|---------|--------|
| Design Focus | High availability and scalability | Data integrity and structured relationships |
| Replication & Sharding | Built-in support | Limited support |
| Data Association | Limited join support | Efficient JOIN operations |
| Data Duplication | May require data duplication | Minimizes duplication through joins |

## Terminology Differences

| Concept | MongoDB Term | MySQL Term |
|---------|-------------|------------|
| Data Unit | Document | Row/Record |
| Data Grouping | Collection | Table |
| Database | Database | Database |

## Data Representation
- MongoDB: Stores data in JSON-like documents
- MySQL: Stores data in tabular format with rows and columns

This structured comparison highlights the fundamental differences between MongoDB and MySQL, helping developers choose the right database for their specific needs.


---


# MongoDB Installation Guide 📚

## Features of MongoDB
- Document Oriented
- No complex joins needed
- Indexed Database
- Scalability
- Automatic Partitioning of Big Data

## Ubuntu Installation

### Prerequisites
- Ubuntu operating system
- Terminal access
- sudo privileges

### Step-by-Step Installation

1. **Update System Repository**
```bash
$ sudo apt update && sudo apt upgrade
```

2. **Install MongoDB**
```bash
$ sudo apt install -y mongodb
```

3. **Check Service Status**
```bash
$ sudo systemctl status mongodb
```

4. **Verify Installation**
```bash
$ mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```
> Note: A value of "1" in ok field indicates proper server function

### Managing MongoDB Service
```bash
# Stop MongoDB
$ sudo systemctl stop mongodb

# Check status
$ sudo systemctl status mongodb

# Start MongoDB
$ sudo systemctl start mongodb
```

## Windows Installation 

### Prerequisites
- Windows operating system
- Administrative privileges
- Internet connection

### Installation Steps

1. **Download MongoDB**
   - Visit MongoDB Download Center
   - Select:
     - Version: 4.2.2
     - OS: WindowsOS
     - Package: msi

2. **Installation Process**
   1. Open the MSI file
   2. Accept End-User License Agreement
   3. Choose 'Complete' installation option
   4. Select "Run service as Network Service user"
   5. Note the data directory path
   6. Complete installation

3. **Environment Setup**
   1. Copy MongoDB bin path
   2. Add to System Environment Variables:
      - System Properties → Environment Variables → System Variables → Path
      - Add MongoDB bin path

4. **Create Data Directory**
   1. Create folder structure:
      ```
      C:\data\db
      ```

5. **Start MongoDB Server**
```bash
mongod
```

6. **Connect to MongoDB**
   1. Keep mongod window open
   2. Open new command prompt
   3. Type:
   ```bash
   mongo
   ```
   > ⚠️ Important: Keep mongod window open while using MongoDB

### Testing Installation

Create a test database and collection:
```javascript
// Create/switch to database
use gfg

// Insert test document
db.student.insertOne({Akshay:500})
```

## Important Notes 📝

1. **For Ubuntu:**
   - MongoDB starts automatically after installation
   - Service can be managed using systemctl commands

2. **For Windows:**
   - Keep mongod running in separate window
   - Data directory must exist before starting server
   - Environment variables must be set correctly

3. **Common to Both:**
   - Verify installation before use
   - Check server status regularly
   - Use proper shutdown procedures

## Troubleshooting

1. **Ubuntu Issues:**
   - If service doesn't start, check logs: `/var/log/mongodb/`
   - Verify permissions on data directory

2. **Windows Issues:**
   - If "C:/data/db/ not found" error appears, create the directory
   - Verify environment variables are set correctly
   - Ensure mongod is running before using mongo shell
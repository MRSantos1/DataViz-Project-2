-- Race Enrollment -- 
CREATE TABLE IF NOT EXISTS race (
    ethnicity TEXT,
    enrollment INT,
    year INT
);

-- City Enrollment --
CREATE TABLE IF NOT EXISTS city (
    city2 TEXT,
    enrollment INT,
    year INT
);

-- County Enrollment --
CREATE TABLE IF NOT EXISTS county (
    county TEXT,
    enrollment INT,
    year INT
);


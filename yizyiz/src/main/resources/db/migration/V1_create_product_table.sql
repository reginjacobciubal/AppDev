-- Create products table
CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    completed BOOLEAN DEFAULT FALSE
);

-- Create index on name for faster searches
CREATE INDEX idx_task_title ON task(title);

-- Seeding the table with sample data
INSERT INTO tasks (title, description, completed) VALUES 
    ('Learn Spring Boot', 'Help you Understand basics of Spring Boot REST APIs', false),
    ('Docker Deployment', 'Deploy application manually to Docker container', false);
   
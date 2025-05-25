-- Update data already given, WK2 Activity 2 Task 1
-- Question 1
INSERT INTO PUBLIC.ACCOUNT (
        account_firstname,
        account_lastname,
        account_email,
        account_password
    )
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
-- Question 2
UPDATE PUBLIC.ACCOUNT
SET ACCOUNT_TYPE = 'Admin'
WHERE ACCOUNT_ID = 1;
-- Question 3
DELETE FROM PUBLIC.ACCOUNT
WHERE ACCOUNT_ID = 1;
-- Question 5
SELECT INV_MAKE,
    INV_MODEL,
    CLASSIFICATION.CLASSIFICATION_NAME
FROM INVENTORY
    JOIN CLASSIFICATION ON INVENTORY.CLASSIFICATION_ID = CLASSIFICATION.CLASSIFICATION_ID
WHERE CLASSIFICATION.CLASSIFICATION_NAME = 'Sport';
-- Question 4
UPDATE PUBLIC.INVENTORY
SET INV_DESCRIPTION = REPLACE(
        INV_DESCRIPTION,
        'the small interiors',
        'a huge interior'
    )
WHERE INV_ID = 10;
-- Question 6
UPDATE PUBLIC.INVENTORY
SET INV_IMAGE = REPLACE(INV_IMAGE, '/images', '/images/vehicles'),
    INV_THUMBNAIL = REPLACE(INV_THUMBNAIL, '/images', '/images/vehicles');
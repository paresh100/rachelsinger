---
name: google-sheets
description: Read/Write data to Sheets, manage formulas, and generate reports.
---
# Sheets Protocols
1. **Batching:** When writing more than 50 rows, use batch updates to stay within quota.
2. **Formatting:** Apply frozen headers and zebra-striping to any new sheet generated for the user.
3. **Data Integrity:** Never overwrite a sheet without first reading the current headers to verify the schema.

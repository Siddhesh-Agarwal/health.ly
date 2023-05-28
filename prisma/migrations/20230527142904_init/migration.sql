-- CreateTable
CREATE TABLE "MedicalData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "height" REAL NOT NULL DEFAULT 180,
    "weight" REAL NOT NULL DEFAULT 70,
    "dob" DATETIME NOT NULL,
    "bloodGroup" TEXT NOT NULL DEFAULT 'O+',
    "allergies" TEXT DEFAULT 'None',
    "medications" TEXT DEFAULT 'None',
    "medicalHistory" TEXT DEFAULT 'None',
    "identification" TEXT DEFAULT 'None',
    "emergencyContactName" TEXT DEFAULT 'None',
    "emergencyContactNumber" TEXT DEFAULT 'None',
    "insuranceProvider" TEXT DEFAULT 'None',
    "insuranceNumber" TEXT DEFAULT 'None'
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalData_insuranceNumber_key" ON "MedicalData"("insuranceNumber");

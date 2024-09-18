-- CreateTable
CREATE TABLE "technology" (
    "id_technology" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "technology_pkey" PRIMARY KEY ("id_technology")
);

-- CreateIndex
CREATE UNIQUE INDEX "technology_name_key" ON "technology"("name");

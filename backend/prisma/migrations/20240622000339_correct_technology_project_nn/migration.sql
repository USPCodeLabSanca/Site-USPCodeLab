/*
  Warnings:

  - You are about to drop the column `projectId_project` on the `technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "technology" DROP CONSTRAINT "technology_projectId_project_fkey";

-- AlterTable
ALTER TABLE "technology" DROP COLUMN "projectId_project";

-- CreateTable
CREATE TABLE "_project_technologies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_project_technologies_AB_unique" ON "_project_technologies"("A", "B");

-- CreateIndex
CREATE INDEX "_project_technologies_B_index" ON "_project_technologies"("B");

-- AddForeignKey
ALTER TABLE "_project_technologies" ADD CONSTRAINT "_project_technologies_A_fkey" FOREIGN KEY ("A") REFERENCES "project"("id_project") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_project_technologies" ADD CONSTRAINT "_project_technologies_B_fkey" FOREIGN KEY ("B") REFERENCES "technology"("id_technology") ON DELETE CASCADE ON UPDATE CASCADE;

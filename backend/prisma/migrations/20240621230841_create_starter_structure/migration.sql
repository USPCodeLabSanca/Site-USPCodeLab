-- AlterTable
ALTER TABLE "technology" ADD COLUMN     "projectId_project" INTEGER;

-- CreateTable
CREATE TABLE "event" (
    "id_event" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "group" (
    "id_group" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id_group")
);

-- CreateTable
CREATE TABLE "project" (
    "id_project" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_group" INTEGER NOT NULL,
    "photo" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id_project")
);

-- AddForeignKey
ALTER TABLE "technology" ADD CONSTRAINT "technology_projectId_project_fkey" FOREIGN KEY ("projectId_project") REFERENCES "project"("id_project") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "group"("id_group") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(220) NOT NULL,
    "long" VARCHAR(20) NOT NULL,
    "lat" VARCHAR(20) NOT NULL,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "state" VARCHAR,
    "city" VARCHAR,

    CONSTRAINT "localization_pkey" PRIMARY KEY ("id")
);

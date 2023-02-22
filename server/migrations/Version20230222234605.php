<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230222234605 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create user and role tables';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE role_role_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('
            CREATE TABLE role (
                role_id INT NOT NULL,
                name TEXT NOT NULL,
                PRIMARY KEY(role_id)
            )
        ');
        $this->addSql('
            CREATE TABLE "user" (
                user_id INT NOT NULL,
                role_id INT NOT NULL,
                email TEXT NOT NULL,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                fg_color TEXT DEFAULT NULL,
                bg_color TEXT DEFAULT NULL,
                PRIMARY KEY(user_id)
            )
        ');
        $this->addSql('CREATE INDEX ix__user__role_id ON "user" (role_id)');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT fk_user__role FOREIGN KEY (role_id) REFERENCES role (role_id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE role_role_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_user_id_seq" CASCADE');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT fk_user__role');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE "user"');
    }
}

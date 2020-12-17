using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Journals",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    Grill = table.Column<string>(nullable: false),
                    Meat = table.Column<string>(nullable: false),
                    Cut = table.Column<string>(nullable: true),
                    StartTime = table.Column<DateTime>(nullable: false),
                    EndTime = table.Column<DateTime>(nullable: false),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Journals", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Value",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Value", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Value",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Value 101" });

            migrationBuilder.InsertData(
                table: "Value",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Value 102" });

            migrationBuilder.InsertData(
                table: "Value",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Value 103" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Journals");

            migrationBuilder.DropTable(
                name: "Value");
        }
    }
}

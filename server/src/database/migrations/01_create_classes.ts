import Knex from 'knex';

// Knex Documentation: http://knexjs.org/

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') // se um professor for deletado, todas as suas aulas também serão
            .onUpdate('CASCADE');
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
};
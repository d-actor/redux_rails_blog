class CreateBlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :blogs do |t|
      t.string :name
      t.text :body
      t.boolean :read

      t.timestamps
    end
  end
end

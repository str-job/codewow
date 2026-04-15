/*
  # Create Portfolio Items Table

  1. New Tables
    - `portfolio_items`
      - `id` (uuid, primary key) - Unique identifier for each portfolio item
      - `title` (text) - Title of the portfolio project
      - `description` (text, optional) - Description of the project
      - `link` (text) - URL link to the project
      - `created_at` (timestamptz) - Timestamp when the item was created
      - `order_index` (integer) - Order for displaying items (lower numbers first)

  2. Security
    - Enable RLS on `portfolio_items` table
    - Add policy for public read access (anyone can view portfolio items)
    - No insert/update/delete policies (admin will use service role key)

  3. Notes
    - Portfolio items are publicly viewable
    - Admin operations will be handled through Edge Functions with service role
*/

CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text DEFAULT '',
  link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  order_index integer DEFAULT 0
);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view portfolio items"
  ON portfolio_items
  FOR SELECT
  TO anon, authenticated
  USING (true);
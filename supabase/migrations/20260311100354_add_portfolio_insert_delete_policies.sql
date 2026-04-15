/*
  # Add Insert and Delete Policies for Portfolio Items

  1. Security Changes
    - Add policy to allow authenticated users to insert portfolio items
    - Add policy to allow authenticated users to delete portfolio items
    - This enables the admin panel functionality for adding and removing projects

  2. Notes
    - These policies allow any authenticated user to manage portfolio items
    - In production, you may want to restrict this to specific admin users
*/

-- Policy for inserting portfolio items
CREATE POLICY "Authenticated users can insert portfolio items"
  ON portfolio_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy for deleting portfolio items
CREATE POLICY "Authenticated users can delete portfolio items"
  ON portfolio_items
  FOR DELETE
  TO authenticated
  USING (true);

-- Policy for updating portfolio items (for future use)
CREATE POLICY "Authenticated users can update portfolio items"
  ON portfolio_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

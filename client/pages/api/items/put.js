export default function handler(req, res) {
  const { newItem } = JSON.parse(req.body);
  console.log(newItem);

  try {
    //var item = getItems(req.query.category);
  } catch (error) {
    return res.status(404).json({ 'error': 'Invalid category' });
  }

  return res.status(200).json({});
}

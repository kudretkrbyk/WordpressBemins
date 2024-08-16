export default function MarqueeText() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="marquee_text_content inline-block">
          <ul className="flex gap-8 animate-marquee">
            {Array(10).fill(
              <li>
                <a className="hover:text-[#54d9e1]" href="#">
                  Free Delivery on orders over $100.
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
